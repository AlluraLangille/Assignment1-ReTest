const API_URL = "http://localhost:3000/api/legends";

const legendList = document.getElementById("legend-list");
const addForm = document.getElementById("add-legend-form");
let currentEditForm = null;
let currentEditLi = null;
const messageDiv = document.getElementById("message");
const cancelEditBtn = document.getElementById("cancel-edit");

function showMessage(msg, timeout = 2000) {
    messageDiv.textContent = msg;
    setTimeout(() => (messageDiv.textContent = ""), timeout);
}


function removeCurrentEditForm() {
    if (currentEditForm && currentEditForm.parentNode) {
        currentEditForm.parentNode.removeChild(currentEditForm);
        currentEditForm = null;
        currentEditLi = null;
    }
}

function createEditForm(legend) {
    const form = document.createElement("form");
    form.className = "edit-legend-form";
    form.innerHTML = `
        <input type="hidden" name="id" value="${legend.id}" />
        <input type="text" name="title" value="${legend.title}" placeholder="Title" required />
        <input type="text" name="origin" value="${legend.origin}" placeholder="Origin" required />
        <textarea name="description" placeholder="Description" required>${legend.description}</textarea>
        <button type="submit">Save Changes</button>
        <button type="button" class="cancel-edit">Cancel</button>
    `;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const id = legend.id;
        const title = form.elements["title"].value;
        const origin = form.elements["origin"].value;
        const description = form.elements["description"].value;
        fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, origin, description }),
        })
            .then((res) => {
                if (!res.ok) throw new Error();
                showMessage("Legend updated!");
                removeCurrentEditForm();
                fetchLegends();
            })
            .catch(() => showMessage("Failed to update legend"));
    });

    form.querySelector(".cancel-edit").addEventListener("click", function () {
        removeCurrentEditForm();
    });

    return form;
}

function renderLegends(legends) {
    legendList.innerHTML = "";
    legends.forEach((legend) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div>
                <strong>${legend.title}</strong> <em>(${legend.origin})</em><br>
                <span>${legend.description}</span>
            </div>
            <div class="legend-actions">
                <button class="edit" data-id="${legend.id}">Edit</button>
                <button class="delete" data-id="${legend.id}">Delete</button>
            </div>
        `;
        legendList.appendChild(li);
        // If this legend is being edited, insert the edit form below it
        if (currentEditLi && currentEditLi.dataset && currentEditLi.dataset.editingId == legend.id) {
            li.appendChild(currentEditForm);
        }
    });
}


function fetchLegends() {
    fetch(API_URL)
        .then((res) => {
            if (!res.ok) throw new Error();
            return res.json();
        })
        .then(renderLegends)
        .catch(() => showMessage("Failed to load legends"));
}


addForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("add-title").value.trim();
    const origin = document.getElementById("add-origin").value.trim();
    const description = document.getElementById("add-description").value.trim();
    if (!title || !origin || !description) {
        showMessage("All fields are required.");
        return;
    }
    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, origin, description }),
    })
        .then((res) => {
            if (!res.ok) throw new Error();
            return res.json();
        })
        .then(() => {
            showMessage("Legend added!");
            addForm.reset();
            fetchLegends();
        })
        .catch(() => showMessage("Failed to add legend"));
});



legendList.addEventListener("click", function (e) {
    if (e.target.classList.contains("edit")) {
        const id = e.target.getAttribute("data-id");
        fetch(`${API_URL}/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error();
                return res.json();
            })
            .then((legend) => {
                removeCurrentEditForm();
                // Find the <li> for this legend
                const li = e.target.closest("li");
                currentEditForm = createEditForm(legend);
                currentEditLi = li;
                // Mark this li as being edited
                li.dataset.editingId = legend.id;
                li.appendChild(currentEditForm);
            })
            .catch(() => showMessage("Failed to load legend for editing"));
    } else if (e.target.classList.contains("delete")) {
        const id = e.target.getAttribute("data-id");
        if (confirm("Delete this legend?")) {
            fetch(`${API_URL}/${id}`, { method: "DELETE" })
                .then((res) => {
                    if (!res.ok) throw new Error();
                    showMessage("Legend deleted!");
                    fetchLegends();
                })
                .catch(() => showMessage("Failed to delete legend"));
        }
    }
});



// Initial load
fetchLegends();
