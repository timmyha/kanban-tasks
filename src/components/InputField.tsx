import React from "react";

interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ input, setInput, handleSubmit }) => {

  return(
    <form onSubmit={(e) => handleSubmit(e)}>
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)} />
      <button>&gt;</button>
    </form>
  )
}

export default InputField