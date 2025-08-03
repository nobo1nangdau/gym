
  // Hiện form
  document.getElementById("showFormBtn").addEventListener("click", function () {
    document.getElementById("addForm").classList.remove("hidden");
  });

  // Ẩn form khi nhấn nút hủy
  document.getElementById("cancelBtn").addEventListener("click", function () {
    document.getElementById("addForm").classList.add("hidden");
  });

  // Xử lý khi submit form
  document.getElementById("trainerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const avatar = document.getElementById("avatar").value;
    const tbody = document.querySelector("tbody");
    const id = `#00${tbody.children.length + 1}`;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">${id}</div></td>
      <td class="px-6 py-4 whitespace-nowrap">
        <img class="h-10 w-10 rounded-full" src="https://placehold.co/40x40/94A3B8/ffffff?text=${avatar}" alt="Avatar">
      </td>
      <td class="px-6 py-4 whitespace-nowrap"><div class="text-sm font-medium text-gray-900">${name}</div></td>
      <td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">${phone}</div></td>
      <td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">${email}</div></td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <a href="#" class="text-indigo-600 hover:text-indigo-900 mr-4">Chỉnh sửa</a>
        <a href="#" class="text-red-600 hover:text-red-900">Xóa</a>
      </td>
    `;

    tbody.appendChild(row);

    // Reset và ẩn form
    e.target.reset();
    document.getElementById("addForm").classList.add("hidden");
  });
