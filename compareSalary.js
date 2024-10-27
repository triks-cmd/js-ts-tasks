function salaryDifference(salary1,salary2,salary3) {
    let maxSalary = Math.max(salary1,salary2,salary3);
    let minSalary = Math.min(salary1,salary2,salary3);
    return maxSalary - minSalary;
}

let salary1 = 30000;
let salary2 = 50000;
let salary3 = 80000;
console.log(salaryDifference(salary1,salary2,salary3));
