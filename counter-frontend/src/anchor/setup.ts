
import {IdlAccounts, Program} from "@coral-xyz/anchor"
import { IDL , Counter} from "./idl";
import { PublicKey, Connection, clusterApiUrl } from "@solana/web3.js";
// src/setup.ts
import { Buffer } from 'buffer';

// Ensure the Buffer class is available globally
(window as any).Buffer = Buffer;

const programId = new PublicKey("9m5JMJKcnwUymts3cCgqM3eLNTPn2W2WLALRujpXw3Px");
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

export const program = new Program<Counter>(IDL, programId, {
    connection,
});

export const [counterPDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("psolite")],
    programId,
);

export type CounterData = IdlAccounts<Counter>["counter"];