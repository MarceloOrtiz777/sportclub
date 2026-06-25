const API_URL = "http://localhost:3000/api/sports";

const getAuthHeaders = () => {
const token = localStorage.getItem("token");
return {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
};
};

export const sportsService = {
  // 1. GET /api/sports
getAll: async () => {
    const res = await fetch(API_URL, { headers: getAuthHeaders() });
    return await res.json();
},

  // 2. POST /api/sports
create: async (sportData) => {
    const res = await fetch(API_URL, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(sportData)
    });
    return await res.json();
},

  // 3. PUT /api/sports/:id
update: async (id, sportData) => {
    const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(sportData)
    });
    return await res.json();
},

  // 4. DELETE /api/sports/:id
delete: async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders()
    });
    return await res.json();
},

  // 5. PATCH /api/sports/:id/status
updateStatus: async (id, status) => {
    const res = await fetch(`${API_URL}/${id}/status`, {
    method: "PATCH",
    headers: getAuthHeaders(),
    body: JSON.stringify({ status })
    });
    return await res.json();
}
};