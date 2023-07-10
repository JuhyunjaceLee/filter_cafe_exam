import React from "react";

export default function KakaoConfirm() {
  const { search } = useLocation();
  const confirmLogin = async () => {
    const params = new URLSearchParams(search);
    const code = params.get("code");

    if (code) {
      console.log(code);
    }
  };

  return <div></div>;
}
