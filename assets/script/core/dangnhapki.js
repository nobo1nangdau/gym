
  function toggleModal(id) {
    const modal = document.getElementById(id);
    modal.classList.toggle("hidden");
  }

  function handleLogin(event) {
    event.preventDefault();
    alert("Đăng nhập thành công (demo)");
    toggleModal('loginModal');
  }

  function handleRegister(event) {
    event.preventDefault();
    alert("Đăng ký thành công (demo)");
    toggleModal('registerModal');
  }

