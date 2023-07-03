export const GUID_ABI = {
    "address": "0x1",
    "name": "guid",
    "friends": [
        "0x1::account",
        "0x1::object"
    ],
    "exposed_functions": [
        {
            "name": "create",
            "visibility": "friend",
            "is_entry": false,
            "is_view": false,
            "generic_type_params": [],
            "params": [
                "address",
                "&mut u64"
            ],
            "return": [
                "0x1::guid::GUID"
            ]
        },
        {
            "name": "create_id",
            "visibility": "public",
            "is_entry": false,
            "is_view": false,
            "generic_type_params": [],
            "params": [
                "address",
                "u64"
            ],
            "return": [
                "0x1::guid::ID"
            ]
        },
        {
            "name": "creation_num",
            "visibility": "public",
            "is_entry": false,
            "is_view": false,
            "generic_type_params": [],
            "params": [
                "&0x1::guid::GUID"
            ],
            "return": [
                "u64"
            ]
        },
        {
            "name": "creator_address",
            "visibility": "public",
            "is_entry": false,
            "is_view": false,
            "generic_type_params": [],
            "params": [
                "&0x1::guid::GUID"
            ],
            "return": [
                "address"
            ]
        },
        {
            "name": "eq_id",
            "visibility": "public",
            "is_entry": false,
            "is_view": false,
            "generic_type_params": [],
            "params": [
                "&0x1::guid::GUID",
                "&0x1::guid::ID"
            ],
            "return": [
                "bool"
            ]
        },
        {
            "name": "id",
            "visibility": "public",
            "is_entry": false,
            "is_view": false,
            "generic_type_params": [],
            "params": [
                "&0x1::guid::GUID"
            ],
            "return": [
                "0x1::guid::ID"
            ]
        },
        {
            "name": "id_creation_num",
            "visibility": "public",
            "is_entry": false,
            "is_view": false,
            "generic_type_params": [],
            "params": [
                "&0x1::guid::ID"
            ],
            "return": [
                "u64"
            ]
        },
        {
            "name": "id_creator_address",
            "visibility": "public",
            "is_entry": false,
            "is_view": false,
            "generic_type_params": [],
            "params": [
                "&0x1::guid::ID"
            ],
            "return": [
                "address"
            ]
        }
    ],
    "structs": [
        {
            "name": "GUID",
            "is_native": false,
            "abilities": [
                "drop",
                "store"
            ],
            "generic_type_params": [],
            "fields": [
                {
                    "name": "id",
                    "type": "0x1::guid::ID"
                }
            ]
        },
        {
            "name": "ID",
            "is_native": false,
            "abilities": [
                "copy",
                "drop",
                "store"
            ],
            "generic_type_params": [],
            "fields": [
                {
                    "name": "creation_num",
                    "type": "u64"
                },
                {
                    "name": "addr",
                    "type": "address"
                }
            ]
        }
    ]
} as const;