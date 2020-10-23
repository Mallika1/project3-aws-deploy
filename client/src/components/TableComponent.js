import React from 'react'

function TableComponent(props) {
    return (
        <table class="table table-striped">

            <thead>
                <tr>

                    <th>
                        <span class="custom-checkbox">
                            <input type="checkbox" id="selectAll" />
                            <label for="selectAll"></label>
                        </span>
                    </th>
                    <th scope="col" class="col-xs-2">Data Subject Area</th>
                    <th scope="col">Data Concept</th>
                    <th scope="col">Data Element</th>
                    <th scope="col">DQ Rule Type</th>
                    <th scope="col">DQ Rule Pattern</th>
                    <th scope="col">DQ Rule Definition</th>
                    <th scope="col"class="col-xs-1">SQL Code</th>
                    <th scope="col" >Action</th>
                </tr>
            </thead>
            <tbody>
                {props.tabledata}

            </tbody>
        </table>
    )
}

export default TableComponent;