import Paper from '@mui/material/Paper';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';
import { appointments } from '../../demo-data/appointments';
import React from 'react';
import useGetListTimetable from './useGetListLecturer';

const PREFIX = 'Demo';
export const classes = {
  container: `${PREFIX}-container`,
  text: `${PREFIX}-text`,
  formControlLabel: `${PREFIX}-formControlLabel`,
};
const StyledDiv = styled('div')(({ theme }) => ({
  [`&.${classes.container}`]: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  [`& .${classes.text}`]: theme.typography.h6,
  [`& .${classes.formControlLabel}`]: {
    ...theme.typography.caption,
    fontSize: '1rem',
  },
}));

const currentDate = '2018-06-27';
const editingOptionsList = [
  { id: 'allowAdding', text: 'Adding' },
  { id: 'allowDeleting', text: 'Deleting' },
  { id: 'allowUpdating', text: 'Updating' },
  { id: 'allowResizing', text: 'Resizing' },
  { id: 'allowDragging', text: 'Dragging' },
];

const EditingOptionsSelector = ({ options, onOptionsChange }) => (
  <StyledDiv className={classes.container}>
    <Typography className={classes.text}>Enabled Options</Typography>
    <FormGroup row>
      {editingOptionsList.map(({ id, text }) => (
        <FormControlLabel
          control={
            <Checkbox
              checked={options[id]}
              onChange={onOptionsChange}
              value={id}
              color='primary'
            />
          }
          classes={{ label: classes.formControlLabel }}
          label={text}
          key={id}
          disabled={(id === 'allowDragging' || id === 'allowResizing') && !options.allowUpdating}
        />
      ))}
    </FormGroup>
  </StyledDiv>
);

export default () => {
  const [data, setData] = React.useState(appointments);
  const [loading, list] = useGetListTimetable();
  //   const list = [
  //     {
  //       title: 'abc',
  //       startDate: new Date(2018, 5, 25, 9, 35),
  //       endDate: new Date(2018, 5, 25, 11, 30),
  //       id: 0,
  //       location: 'Room 1',
  //     },
  //   ];
  const listmap = list.map((item) => {
    return {
      title: item.subject,
      startDate: item.timestart,
      endDate: item.timeend,
      id: item.id,
      location: item.room,
    };
  });
  console.log('list', list);
  console.log('listmap', listmap);
  const [editingOptions, setEditingOptions] = React.useState({
    allowAdding: true,
    allowDeleting: true,
    allowUpdating: true,
    allowDragging: true,
    allowResizing: true,
  });
  const [addedAppointment, setAddedAppointment] = React.useState({});
  const [isAppointmentBeingCreated, setIsAppointmentBeingCreated] = React.useState(false);

  const { allowAdding, allowDeleting, allowUpdating, allowResizing, allowDragging } =
    editingOptions;

  const onCommitChanges = React.useCallback(
    ({ added, changed, deleted }: any) => {
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        setData([...data, { id: startingAddedId, ...added }]);
      }
      if (changed) {
        setData(
          data.map((appointment) =>
            changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment,
          ),
        );
      }
      if (deleted !== undefined) {
        setData(data.filter((appointment) => appointment.id !== deleted));
      }
      setIsAppointmentBeingCreated(false);
    },
    [setData, setIsAppointmentBeingCreated, data],
  );
  const onAddedAppointmentChange = React.useCallback((appointment) => {
    setAddedAppointment(appointment);
    setIsAppointmentBeingCreated(true);
  });
  const handleEditingOptionsChange = React.useCallback(({ target }) => {
    const { value } = target;
    const { [value]: checked } = editingOptions;
    setEditingOptions({
      ...editingOptions,
      [value]: !checked,
    });
  });

  const TimeTableCell = React.useCallback(
    React.memo(({ onDoubleClick, ...restProps }: any) => (
      <WeekView.TimeTableCell
        {...restProps}
        onDoubleClick={allowAdding ? onDoubleClick : undefined}
      />
    )),
    [allowAdding],
  );

  const CommandButton = React.useCallback(
    ({ id, ...restProps }: any) => {
      if (id === 'deleteButton') {
        return (
          <AppointmentForm.CommandButton
            id={id}
            {...restProps}
            disabled={!allowDeleting}
          />
        );
      }
      return (
        <AppointmentForm.CommandButton
          id={id}
          {...restProps}
        />
      );
    },
    [allowDeleting],
  );

  const allowDrag = React.useCallback(
    () => allowDragging && allowUpdating,
    [allowDragging, allowUpdating],
  );
  const allowResize = React.useCallback(
    () => allowResizing && allowUpdating,
    [allowResizing, allowUpdating],
  );

  return (
    <React.Fragment>
      <EditingOptionsSelector
        options={editingOptions}
        onOptionsChange={handleEditingOptionsChange}
      />
      <Paper>
        <Scheduler
          data={listmap}
          height={600}
        >
          <ViewState currentDate={currentDate} />
          <EditingState
            onCommitChanges={onCommitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={onAddedAppointmentChange}
          />

          <IntegratedEditing />
          <WeekView
            startDayHour={9}
            endDayHour={19}
            timeTableCellComponent={TimeTableCell}
          />

          <Appointments />

          <AppointmentTooltip
            showOpenButton
            showDeleteButton={allowDeleting}
          />
          <AppointmentForm
            commandButtonComponent={CommandButton}
            readOnly={isAppointmentBeingCreated ? false : !allowUpdating}
          />
          <DragDropProvider
            allowDrag={allowDrag}
            allowResize={allowResize}
          />
        </Scheduler>
      </Paper>
    </React.Fragment>
  );
};
