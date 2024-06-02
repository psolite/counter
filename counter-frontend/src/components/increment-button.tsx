import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { counterPDA, program } from "../anchor/setup";

export default function IncrementButton() {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    if (!publicKey) return;

    setIsLoading(true);

    try {
      const tranaction = await program.methods.increment()
      .accounts({
        counter: counterPDA,
      })
      .transaction();
// console.log("uuuuuuuuuuuu")
      const transactionSignature = await sendTransaction(
        tranaction,
        connection
      );

      console.log(
        `View on explorer: https://solana.fm/tx/${transactionSignature}?cluster=devnet-alpha`
      );

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button className="w-24" onClick={onClick} disabled={!publicKey}>
      {isLoading ? "Loading" : "Increment"}
    </button>
  );
}
