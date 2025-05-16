import { useRef, useState, type FormEvent } from "react";
import { SendIcon } from "../../icons/SendIcon";
import { LoadingIcon } from "../../icons/LoadingIcon";
import emailjs from "@emailjs/browser";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = ({
  pk,
  sId,
  tId,
  TEXT,
}: {
  pk: string;
  sId: string;
  tId: string;
  TEXT: any;
}) => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(sId, tId, form.current as HTMLFormElement, { publicKey: pk })
      .then(() => {
        setError(false);
        setLoading(false);
        toast.success(TEXT.successMessage);
      })
      .catch((e) => {
        console.error(e);
        setError(true);
        setLoading(false);
      });
  }

  return (
    <form className="flex flex-col gap-6 flex-1" onSubmit={submit} ref={form}>
      <div className="flex flex-col gap-2">
        <label htmlFor="from_name">{TEXT.name.label}</label>
        <input
          autoComplete="off"
          required
          className="bg-[#121212] rounded-md text-white focus:border-[#03a7f1] focus:outline-none focus:border py-3 px-4"
          type="text"
          name="from_name"
          id="from_name"
          placeholder={TEXT.name.placeholder}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">{TEXT.email.label}</label>
        <input
          autoComplete="off"
          required
          className="bg-[#121212] rounded-md text-white focus:border-[#03a7f1] focus:outline-none focus:border py-3 px-4"
          type="email"
          name="email"
          id="email"
          placeholder={TEXT.email.placeholder}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message">{TEXT.message.label}</label>
        <textarea
          autoComplete="off"
          required
          className="bg-[#121212] rounded-md text-white focus:border-[#03a7f1] focus:outline-none focus:border min-h-24 resize-y px-4 py-3"
          name="message"
          id="message"
          placeholder={TEXT.message.placeholder}
        ></textarea>
      </div>
      {error && <p className="text-red-500">{TEXT.errorMessage}</p>}
      <button
        id="submit-contact-form"
        type="submit"
        className="font-semibold px-4 py-2 rounded-md flex items-center justify-center gap-2 border border-transparent bg-[#03a6f1b0] cursor-pointer hover:bg-[#03a6f186] transition-all duration-200"
      >
        {loading ? (
          <LoadingIcon size={24} />
        ) : (
          <>
            {TEXT.send} <SendIcon size={24} />
          </>
        )}
      </button>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
        limit={1}
      />
    </form>
  );
};

export default ContactForm;
