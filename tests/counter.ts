import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Counter } from "../target/types/counter";
import { PublicKey, SystemProgram } from "@solana/web3.js"

describe("counter", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Counter as Program<Counter>;

  const [counterPDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("psolite")],
    program.programId,
  );
  it("Is initialized!", async () => {
  
    // Add your test here.
    const tx = await program.methods.initialize()
    .accounts({
      counter: counterPDA,
      user: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
    })
    .rpc();

    const accountData = await program.account.counter.fetch(counterPDA);
    console.log("Your transaction signature ", tx);
    console.log(`Count: ${accountData.count}`)
  });
  
  it("Increment!", async () => {
 
    // Add your test here.
    const tx = await program.methods.increment()
    .accounts({
      counter: counterPDA,
    })
    .rpc();
    const accountData = await program.account.counter.fetch(counterPDA);
    console.log("Your transaction signature ", tx);
    console.log(`Count: ${accountData.count}`)
    
  });
});
