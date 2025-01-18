/**
 * Groups users into EMPLOYEE and CONTRACTOR groups.
 * @param {Array<unknown>} users - The array of users to be grouped.
 * @returns {Object<employees: Array<any>, contractors: Array<any>>} - An object containing two arrays: employees and contractors.
 */
module.exports.groupUsers = function (users: Array<any>): Record<'employees' | 'contractors', Array<any>> {
  return users.reduce((groupedUsers, user) => {
    if (user?.type === 'EMPLOYEE') {
      groupedUsers.employees.push(user);
    } else if (user?.type === 'CONTRACTOR') {
      groupedUsers.contractors.push(user);
    }
    return groupedUsers;
  }, { employees: [] as Array<any>, contractors: [] as Array<any> });
};
