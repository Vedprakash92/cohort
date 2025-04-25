
let expenses = [
    { description: "Groceries", amount: 50, category: "Food" },
    { description: "Electricity Bill", amount: 100, category: "Utilities" },
    { description: "Dinner", amount: 30, category: "Food" },
    { description: "Internet Bill", amount: 50, category: "Utilities" },
];

const expenseReport = expenses.reduce((report, expence) => {
    report[expence.category] = (report[expence.category] || 0) + expence.amount;
    return report;
}, {})

//console.log("Expence Report", expenseReport)