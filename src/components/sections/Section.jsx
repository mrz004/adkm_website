import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

export function MyTable({ headers, data }) {
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableHeadCell key={index}>{header}</TableHeadCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            {data.map((row, index) => (
              <TableCell
                key={index}
                className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
              >
                {row}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

function Section({ data }) {
  const {
    title,
    head,
    principal,
    academicYear,
    studentDataTable,
    teacherDataTable,
  } = data;

  return (
    <div className="container flex flex-col gap-8 my-12 mx-auto max-w-4xl">
      <div>
        <h2 className="text-xl font-semibold text-center">{data.title}</h2>
        <p className="text-md text-center font-medium">{data.academicYear}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{head}</h3>
        <p>{data.principal.name}</p>
        <p>Contact: {data.principal.contact}</p>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">विद्यार्थी माहिती</h3>
        <MyTable
          headers={studentDataTable.headers}
          data={studentDataTable.data}
        />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">शिक्षक माहिती</h3>
        <MyTable
          headers={teacherDataTable.headers}
          data={teacherDataTable.data}
        />
      </div>
    </div>
  );
}

export default Section;
