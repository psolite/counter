export type Counter = {
    "version": "0.1.0",
    "name": "counter",
    "instructions": [
      {
        "name": "initialize",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "counter",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "increment",
        "accounts": [
          {
            "name": "counter",
            "isMut": true,
            "isSigner": false
          }
        ],
        "args": []
      }
    ],
    "accounts": [
      {
        "name": "counter",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "count",
              "type": "u64"
            },
            {
              "name": "bump",
              "type": "u8"
            }
          ]
        }
      }
    ]
  };
  
  export const IDL: Counter = {
    "version": "0.1.0",
    "name": "counter",
    "instructions": [
      {
        "name": "initialize",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "counter",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "increment",
        "accounts": [
          {
            "name": "counter",
            "isMut": true,
            "isSigner": false
          }
        ],
        "args": []
      }
    ],
    "accounts": [
      {
        "name": "counter",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "count",
              "type": "u64"
            },
            {
              "name": "bump",
              "type": "u8"
            }
          ]
        }
      }
    ]
  };
  