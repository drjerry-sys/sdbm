import React from 'react';
import './AllResults.scss';

const AllResults = ({ term }) => {
    const results = term ? [1, 2, 3, 4, 5].slice(0,1) : [1, 2, 3, 4, 5];
    return (
        <div className="results">
            {
                results.map((result) => (
                    <>
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
                        <span className="currentTitle">Second Term 2018/2019</span>
                    </>
                ))
            }
        </div>
     );
 }
export default AllResults;