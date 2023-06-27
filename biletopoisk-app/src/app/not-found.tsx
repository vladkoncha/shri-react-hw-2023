import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Страница не найдена!</h2>
      <p>
        Вернуться{" "}
        <Link style={{ textDecoration: "underline" }} href="/">
          на главную
        </Link>
      </p>
    </div>
  );
}
