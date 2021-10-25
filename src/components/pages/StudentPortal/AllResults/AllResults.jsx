import React from 'react';
import './AllResults.scss';

const TableForResults = () => {
    return ( 
        <table>
            <tr>
                <th>S/N</th>
                <th>Subjects</th>
                <th>Test</th>
                <th>Exam</th>
                <th>Grade</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Math</td>
                <td>30</td>
                <td>70</td>
                <td>A+</td>
            </tr>
            <tr>
                <td>2</td>
                <td>English</td>
                <td>30</td>
                <td>70</td>
                <td>A+</td>
            </tr>
        </table>
     );
}
 
export default TableForResults;