import { http } from "../http";
export type Enrollment = { _id: string; user: string; course: string };
export const findAllEnrollments = async (): Promise<Enrollment[]> => (await http.get("/enrollments")).data;
export const enrollIntoCourse = async (user: string, course: string): Promise<Enrollment> => (await http.post(`/users/${user}/courses/${course}`)).data;
export const unenrollFromCourse = async (user: string, course: string) => { await http.delete(`/users/${user}/courses/${course}`); };
