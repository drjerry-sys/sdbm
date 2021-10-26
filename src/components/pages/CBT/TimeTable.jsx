import React from 'react';

const TimeTable = () => {
    return ( 
        <div className="timeTable">
            <table>
                <tr>
                    <th>S/N</th>
                    <th>Subjects</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Venue</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Math</td>
                    <td>Aug 30</td>
                    <td>7:00pm</td>
                    <td>Ajose</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>English</td>
                    <td>Aug 30</td>
                    <td>7:00pm</td>
                    <td>Ajose</td>
                </tr>
                </table>
        </div>
     );
}
 
export default TimeTable;