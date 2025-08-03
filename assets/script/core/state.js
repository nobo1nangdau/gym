// State toàn cục của app (RAM runtime - không lưu vĩnh viễn)
const state = {
  hoiVien: [],
  huanLuyenVien: [],
  goiTap: [],
  thanhToan: [],
};

// Getter
function getState(key) {
  return state[key];
}

// Setter (thay cả mảng)
function setState(key, value) {
  if (state.hasOwnProperty(key)) {
    state[key] = value;
  } else {
    console.warn(`Không tìm thấy key: ${key}`);
  }
}

// Push thêm 1 phần tử vào mảng
function addToState(key, item) {
  if (Array.isArray(state[key])) {
    state[key].push(item);
  } else {
    console.warn(`State[${key}] không phải mảng`);
  }
}

export { state, getState, setState, addToState };
