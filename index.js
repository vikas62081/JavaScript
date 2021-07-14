const XLSX = require('xlsx')
const students = [
    { name: "Raj", email: "raj@gmail.com", age: 23, gender: "M" },
    { name: "Rahul", email: "rahul@gmail.com", age: 15, gender: "M" }
]

const convertJsonToExcel = () => {

    const workSheet = XLSX.utils.json_to_sheet(students);
    const workBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workBook, workSheet, "students")
    // Generate buffer
    XLSX.write(workBook, { bookType: 'xlsx', type: "buffer" })

    // Binary string
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" })

    XLSX.writeFile(workBook, "studentsData.xlsx")

}
convertJsonToExcel()