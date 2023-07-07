import Swal from "sweetalert2";
import "./sweetAlert.css";

export const Alert = (state, texting) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  Toast.fire({
    icon: state,
    title: texting,
  });
};

export const Alert2 = (state, texting, title) => {
  Swal.fire(title, texting, state);
};

export const Alert3 = ({title , text, imageUrl, imageWidth, imageHeight}) => {
  Swal.fire({
    title: title,
    text: text,
    imageUrl: imageUrl,
    imageWidth: 400,
    imageHeight: 300,
  });
};
