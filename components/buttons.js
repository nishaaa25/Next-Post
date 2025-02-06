import { useFormStatus } from "react-dom";

export default function Buttons() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <p>submitting </p>
      ) : (
        <div>
          <button type="reset">Reset</button>
          <button>Create Post</button>
        </div>
      )}
    </>
  );
}
