export interface ITimetable {
  id?: string;
  subject: string;
  class: string;
  room: string;
  day: string;
  timestart: string;
  timeend: string;
}
export type ListTimetable = ITimetable[];
