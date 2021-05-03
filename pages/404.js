import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  function onBack() {
    router.back();
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1
        className="subtitle is-1"
        style={{ fontSize: "3rem", color: "#FF5470" }}
      >
        OOPS!
      </h1>
      <h1
        className="title is-1"
        style={{ fontSize: "15rem", color: "#00214D" }}
      >
        404
      </h1>
      <p className="subtitle is-1" style={{ color: "#FF5470" }}>
        Stranica nije pronađena!
      </p>
      <button
        onClick={() => {
          onBack();
        }}
        className="button"
        style={{
          padding: "1rem 2rem",
          backgroundColor: "#FF5470",
          color: "#F2F4F6",
        }}
      >
        VRATI ME NAZAD
      </button>
    </div>
  );
}
