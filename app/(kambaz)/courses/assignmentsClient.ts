import { http } from "../http";
import type { Assignment } from "../store/assignmentsStore";
export const findAssignmentsForCourse = async (id: string): Promise<Assignment[]> => (await http.get(`/courses/${id}/assignments`)).data;
export const createAssignmentForCourse = async (id: string, assignment: Assignment): Promise<Assignment> => (await http.post(`/courses/${id}/assignments`, assignment)).data;
export const updateAssignment = async (assignment: Assignment): Promise<Assignment> => (await http.put(`/assignments/${assignment._id}`, assignment)).data;
export const deleteAssignment = async (id: string) => { await http.delete(`/assignments/${id}`); };
