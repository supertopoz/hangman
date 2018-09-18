export function addStudentId(string) {
    return {
        type: "ADD_STUDENT_ID",
        payload: string.toUpperCase()
    };
}