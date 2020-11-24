window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});
const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
    const innerHtml = `${headerHtml}
    <tr>
        <td>
            <img class="profile" alt="" src="../assets/profile-images/Ellipse -8.png">
        </td>
        <td>Jyoti Ranjan Mishra</td>
        <td>Male</td>
        <td>
            <div class="dept-label">Engineer</div>
            <div class="dept-label">Finance</div>
        </td>
        <td>450000</td>
        <td>18 September 2018</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
            <img id="1" onclick="update(this)" alt="update" src="../assets/icons/create-black-18dp.svg">
        </td>
    </tr>`
    document.querySelector('#display').innerHTML = innerHtml;
}
