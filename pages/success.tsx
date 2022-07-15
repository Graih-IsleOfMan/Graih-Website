import Link from "next/link";

const Success = () => {
  return (
    <>
      <p>
        <strong>Success!</strong> Your message has been successfully submitted.{" "}
      </p>
      <p>
        <Link href="/contact">
          <a>Go back to the contact page</a>
        </Link>
      </p>
    </>
  );
};

export default Success;
