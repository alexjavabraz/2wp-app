export const WALLET_LEDGER = 'WALLET_LEDGER';
export const WALLET_ELECTRUM = 'WALLET_ELECTRUM';
export const WALLET_TREZOR = 'WALLET_TREZOR';
export const WALLET_RWALLET = 'WALLET_RWALLET';
export const WALLET_DEFIANT = 'WALLET_DEFIANT';

// devices
export const IS_TREZOR_CONNECTED = 'IS_TREZOR_CONNECTED';

// accounts
export const BITCOIN_LEGACY_ADDRESS = 'BITCOIN_LEGACY_ADDRESS';
export const BITCOIN_SEGWIT_ADDRESS = 'BITCOIN_SEGWIT_ADDRESS';
export const BITCOIN_NATIVE_SEGWIT_ADDRESS = 'BITCOIN_NATIVE_SEGWIT_ADDRESS';
export const BITCOIN_MULTISIGNATURE_ADDRESS = 'BITCOIN_MULTISIGNATURE_ADDRESS';

// Fee Level
export const BITCOIN_SLOW_FEE_LEVEL = 'BITCOIN_SLOW_FEE_LEVEL';
export const BITCOIN_AVERAGE_FEE_LEVEL = 'BITCOIN_AVERAGE_FEE_LEVEL';
export const BITCOIN_FAST_FEE_LEVEL = 'BITCOIN_FAST_FEE_LEVEL';

// Pegin tx Actions
export const PEGIN_TX_ADD_ADDRESSES = 'PEGIN_TX_ADD_ADDRESSES';
export const PEGIN_TX_ADD_UTXOS = 'PEGIN_TX_ADD_UTXOS';
export const PEGIN_TX_ADD_SESSION_ID = 'PEGIN_TX_ADD_SESSION_ID';
export const PEGIN_TX_ADD_PEGIN_CONFIGURATION = 'PEGIN_TX_ADD_PEGIN_CONFIGURATION';
export const PEGIN_TX_ADD_BITCOIN_WALLET = 'PEGIN_TX_ADD_BITCOIN_WALLET';
// Session actions
export const WEB3_SESSION_GET_ACCOUNT = 'WEB3_SESSION_GET_ACCOUNT';
export const SESSION_CONNECT_WEB3 = 'SESSION_CONNECT_WEB3';

// Pegin tx Mutations
export const PEGIN_TX_SET_ADDRESS_LIST = 'PEGIN_TX_SET_ADDRESS_LIST';
export const PEGIN_TX_SET_UTXO_LIST = 'PEGIN_TX_SET_UTXO_LIST';
export const PEGIN_TX_SET_TREZOR_CONNECTED = 'PEGIN_TX_SET_TREZOR_CONNECTED';
export const PEGIN_TX_SET_SESSION_ID = 'PEGIN_TX_SET_SESSION_ID';
export const PEGIN_TX_SET_PEGIN_CONFIGURATION = 'PEGIN_TX_SET_PEGIN_CONFIGURATION';
export const PEGIN_TX_SET_BITCOIN_WALLET = 'PEGIN_TX_SET_BITCOIN_WALLET';
// Session mutations
export const SESSION_SET_ACCOUNT = 'SESSION_SET_ACCOUNT';
export const SESSION_SET_WEB3_INSTANCE = 'SESSION_SET_WEB3_INSTANCE';
export const SESSION_IS_ENABLED = 'SESSION_IS_ENABLED';
export const WEB3_SESSION_CLEAR_ACCOUNT = 'WEB3_SESSION_CLEAR_ACCOUNT';

// getters
export const WALLET_NAME = 'WALLET_NAME';
export const PEGIN_TX_GET_CHANGE_ADDRESS = 'PEGIN_TX_GET_CHANGE_ADDRESS';
export const PEGIN_TX_GET_BIP32_DERIVATION_PATH_FROM_ADDRESS = 'PEGIN_TX_GET_BIP32_DERIVATION_PATH_FROM_ADDRESS';
export const PEGIN_TX_GET_BIP44_DERIVATION_PATH_FROM_ADDRESS = 'PEGIN_TX_GET_BIP44_DERIVATION_PATH_FROM_ADDRESS';
export const PEGIN_TX_GET_REFUND_ADDRESS = 'PEGIN_TX_GET_REFUND_ADDRESS';
export const PEGIN_TX_GET_ADDRESS_PUBLIC_KEY = 'PEGIN_TX_GET_ADDRESS_PUBLIC_KEY';