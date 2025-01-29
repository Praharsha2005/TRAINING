// Sample array of employee objects
const employees = [
    {
        id: 1,
        name: "John Doe",
        company: "Tech Corp",
        salary: 50000,
        address: {
            city: "New York",
            area: "Manhattan"
        }
    },
    {
        id: 2,
        name: "Jane Smith",
        company: "Innovate Inc",
        salary: 60000,
        address: {
            city: "San Francisco",
            area: "Downtown"
        }
    },
    {
        id: 3,
        name: "Alice Johnson",
        company: "Data Solutions",
        salary: 55000,
        address: {
            city: "Chicago",
            area: "Loop"
        }
    }
];

// Function to create and display the table
function displayEmployees(employees) {
    // Create a table element
    const table = document.createElement("table");
    table.border = "1";

    // Create the table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const headers = ["ID", "Name", "Company", "Salary", "City", "Area"];
    headers.forEach(headerText => {
        const header = document.createElement("th");
        header.textContent = headerText;
        headerRow.appendChild(header);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create the table body
    const tbody = document.createElement("tbody");
    employees.forEach(emp => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = emp.id;
        row.appendChild(idCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = emp.name;
        row.appendChild(nameCell);

        const companyCell = document.createElement("td");
        companyCell.textContent = emp.company;
        row.appendChild(companyCell);

        const salaryCell = document.createElement("td");
        salaryCell.textContent = emp.salary;
        row.appendChild(salaryCell);

        const cityCell = document.createElement("td");
        cityCell.textContent = emp.address.city;
        row.appendChild(cityCell);

        const areaCell = document.createElement("td");
        areaCell.textContent = emp.address.area;
        row.appendChild(areaCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    // Append the table to the body of the document
    document.body.appendChild(table);
}

// Call the function to display the employees
displayEmployees(employees);