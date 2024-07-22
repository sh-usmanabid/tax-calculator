"use strict";

const taxData = {
    "tax_years": [
        {
            "year": "2019-2020",
            "brackets": [
                { "min_income": 0, "max_income": 600000, "tax_rate": 0 },
                { "min_income": 600000, "max_income": 1200000, "tax_rate": 0.05, "tax_amount": 0 },
                { "min_income": 1200000, "max_income": 1800000, "tax_rate": 0.1, "tax_amount": 30000 },
                { "min_income": 1800000, "max_income": 2500000, "tax_rate": 0.15, "tax_amount": 90000 },
                { "min_income": 2500000, "max_income": 3500000, "tax_rate": 0.175, "tax_amount": 195000 },
                { "min_income": 3500000, "max_income": 5000000, "tax_rate": 0.2, "tax_amount": 370000 },
                { "min_income": 5000000, "max_income": 8000000, "tax_rate": 0.225, "tax_amount": 670000 },
                { "min_income": 8000000, "max_income": 12000000, "tax_rate": 0.25, "tax_amount": 1345000 },
                { "min_income": 12000000, "max_income": 30000000, "tax_rate": 0.275, "tax_amount": 2345000 },
                { "min_income": 30000000, "max_income": 50000000, "tax_rate": 0.3, "tax_amount": 7295000 },
                { "min_income": 50000000, "max_income": 75000000, "tax_rate": 0.325, "tax_amount": 13295000 },
                { "min_income": 75000000, "max_income": Infinity, "tax_rate": 0.35, "tax_amount": 21420000 }
            ]
        },
        {
            "year": "2020-2021",
            "brackets": [
                { "min_income": 0, "max_income": 600000, "tax_rate": 0 },
                { "min_income": 600000, "max_income": 1200000, "tax_rate": 0.05, "tax_amount": 0 },
                { "min_income": 1200000, "max_income": 1800000, "tax_rate": 0.1, "tax_amount": 30000 },
                { "min_income": 1800000, "max_income": 2500000, "tax_rate": 0.15, "tax_amount": 90000 },
                { "min_income": 2500000, "max_income": 3500000, "tax_rate": 0.175, "tax_amount": 195000 },
                { "min_income": 3500000, "max_income": 5000000, "tax_rate": 0.2, "tax_amount": 370000 },
                { "min_income": 5000000, "max_income": 8000000, "tax_rate": 0.225, "tax_amount": 670000 },
                { "min_income": 8000000, "max_income": 12000000, "tax_rate": 0.25, "tax_amount": 1345000 },
                { "min_income": 12000000, "max_income": 30000000, "tax_rate": 0.275, "tax_amount": 2345000 },
                { "min_income": 30000000, "max_income": 50000000, "tax_rate": 0.3, "tax_amount": 7295000 },
                { "min_income": 50000000, "max_income": 75000000, "tax_rate": 0.325, "tax_amount": 13295000 },
                { "min_income": 75000000, "max_income": Infinity, "tax_rate": 0.35, "tax_amount": 21420000 }
            ]
        },
        {
            "year": "2021-2022",
            "brackets": [
                { "min_income": 0, "max_income": 600000, "tax_rate": 0 },
                { "min_income": 600000, "max_income": 1200000, "tax_rate": 0.05, "tax_amount": 0 },
                { "min_income": 1200000, "max_income": 1800000, "tax_rate": 0.1, "tax_amount": 30000 },
                { "min_income": 1800000, "max_income": 2500000, "tax_rate": 0.15, "tax_amount": 90000 },
                { "min_income": 2500000, "max_income": 3500000, "tax_rate": 0.175, "tax_amount": 195000 },
                { "min_income": 3500000, "max_income": 5000000, "tax_rate": 0.2, "tax_amount": 370000 },
                { "min_income": 5000000, "max_income": 8000000, "tax_rate": 0.225, "tax_amount": 670000 },
                { "min_income": 8000000, "max_income": 12000000, "tax_rate": 0.25, "tax_amount": 1345000 },
                { "min_income": 12000000, "max_income": 30000000, "tax_rate": 0.275, "tax_amount": 2345000 },
                { "min_income": 30000000, "max_income": 50000000, "tax_rate": 0.3, "tax_amount": 7295000 },
                { "min_income": 50000000, "max_income": 75000000, "tax_rate": 0.325, "tax_amount": 13295000 },
                { "min_income": 75000000, "max_income": Infinity, "tax_rate": 0.35, "tax_amount": 21420000 }
            ]
        },
        {
            "year": "2022-2023",
            "brackets": [
                { "min_income": 0, "max_income": 600000, "tax_rate": 0 },
                { "min_income": 600000, "max_income": 1200000, "tax_rate": 0.025, "tax_amount": 0 },
                { "min_income": 1200000, "max_income": 2400000, "tax_rate": 0.125, "tax_amount": 15000 },
                { "min_income": 2400000, "max_income": 3600000, "tax_rate": 0.2, "tax_amount": 165000 },
                { "min_income": 3600000, "max_income": 6000000, "tax_rate": 0.25, "tax_amount": 405000 },
                { "min_income": 6000000, "max_income": 12000000, "tax_rate": 0.325, "tax_amount": 1005000 },
                { "min_income": 12000000, "max_income": Infinity, "tax_rate": 0.35, "tax_amount": 2955000 }
            ]
        },
        {
            "year": "2023-2024",
            "brackets": [
                { "min_income": 0, "max_income": 600000, "tax_rate": 0 },
                { "min_income": 600000, "max_income": 1200000, "tax_rate": 0.025, "tax_amount": 0 },
                { "min_income": 1200000, "max_income": 2400000, "tax_rate": 0.125, "tax_amount": 15000 },
                { "min_income": 2400000, "max_income": 3600000, "tax_rate": 0.225, "tax_amount": 165000 },
                { "min_income": 3600000, "max_income": 6000000, "tax_rate": 0.275, "tax_amount": 435000 },
                { "min_income": 6000000, "max_income": Infinity, "tax_rate": 0.35, "tax_amount": 1095000 }
            ]
        }
    ]
};

function populateTaxYearDropdown() {
    const taxYearDropdown = document.getElementById("taxYear");
    taxData.tax_years.forEach((year) => {
        const option = document.createElement("option");
        option.value = year.year;
        option.text = `Tax Year ${year.year}`;
        taxYearDropdown.appendChild(option);
    });
}

function calculateTax(event) {
    event.preventDefault();

    const selectedYear = document.getElementById("taxYear").value;
    const monthlyIncome = parseFloat(document.getElementById("monthlyIncome").value);
    const yearlyIncome = monthlyIncome * 12;

    const yearData = taxData.tax_years.find((year) => year.year === selectedYear);

    if (!yearData) {
        alert("Tax data not found for selected year!");
        return;
    }

    let totalTax = 0;
    let taxableIncome = 0;
    let taxBracket = null;

    for (const bracket of yearData.brackets) {
        if (yearlyIncome >= bracket.min_income && yearlyIncome <= bracket.max_income) {
            taxBracket = bracket;
            break;
        }
    }

    taxableIncome = yearlyIncome - taxBracket.min_income;

    totalTax = taxBracket.tax_rate ? taxableIncome * taxBracket.tax_rate + taxBracket.tax_amount : 0;

    const monthlyTax = totalTax / 12;
    const monthlyIncomeAfterTax = monthlyIncome - monthlyTax;
    const yearlyIncomeAfterTax = yearlyIncome - totalTax;

    const resultsDiv = document.getElementById("results");
    resultsDiv.style.display = "block";
    resultsDiv.innerHTML = `
        <p><b>Monthly Income:</b> ${monthlyIncome.toFixed(2)}</p>
        <p><b>Monthly Tax:</b> ${monthlyTax.toFixed(2)}</p>
        <p><b>Monthly Income After Tax:</b> ${monthlyIncomeAfterTax.toFixed(2)}</p>
        <p><b>Yearly Income:</b> ${yearlyIncome.toFixed(2)}</p>
        <p><b>Yearly Tax:</b> ${totalTax.toFixed(2)}</p>
        <p><b>Yearly Income After Tax:</b> ${yearlyIncomeAfterTax.toFixed(2)}</p>
    `;
}

populateTaxYearDropdown();