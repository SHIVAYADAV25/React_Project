import React, { useId } from "react";
import Select from "react-select";

const countryMap = {
  usd: "us",
  inr: "in",
  eur: "eu",
  gbp: "gb",
  jpy: "jp",
  aud: "au",
  cad: "ca",
  cny: "cn",
  chf: "ch",
  sek: "se",
  nok: "no",
  dkk: "dk",
  nzd: "nz",
  sgd: "sg",
  hkd: "hk",
  aed: "ae",
  sar: "sa",
  qar: "qa",
  kwd: "kw",
  bdt: "bd",
  pkr: "pk",
  lkr: "lk",
};

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  const options = currencyOptions.map((currency) => ({
    value: currency,
    label: (
      <div className="flex items-center gap-2">
        <img
          src={`https://flagcdn.com/24x18/${
            countryMap[currency.toLowerCase()] || "un"
          }.png`}
          alt={currency}
          className="w-5 h-4 rounded-sm"
        />
        <span className="font-medium">
          {currency.toUpperCase()}
        </span>
      </div>
    ),
  }));

  const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "#f3f4f6",
      borderRadius: "10px",
      border: "none",
      minHeight: "40px",
      boxShadow: "none",
      cursor: "pointer",
    }),

    menu: (base) => ({
      ...base,
      borderRadius: "10px",
      overflow: "hidden",
    }),

    option: (base, state) => ({
      ...base,
      display: "flex",
      alignItems: "center",
      backgroundColor: state.isSelected
        ? "#2563eb"
        : state.isFocused
        ? "#dbeafe"
        : "white",
      color: state.isSelected ? "white" : "black",
      cursor: "pointer",
    }),
  };


  return (
    <div
      className={`
        bg-white/95
        rounded-xl
        p-4
        flex
        items-center
        justify-between
        shadow-lg
        ${className}
      `}
    >

      {/* Amount */}
      <div className="w-1/2 pr-4">

        <label
          htmlFor={amountInputId}
          className="text-gray-500 text-sm mb-2 block"
        >
          {label}
        </label>

        <input
          id={amountInputId}
          type="number"
          placeholder="0"
          disabled={amountDisable}
          value={amount}
          className="
            w-full
            bg-transparent
            outline-none
            text-2xl
            font-semibold
            text-gray-800
          "
          onChange={(e) =>
            onAmountChange &&
            onAmountChange(Number(e.target.value))
          }
        />

      </div>


      {/* Currency */}
      <div className="w-40">

        <p className="text-gray-500 text-sm mb-2 text-right">
          Currency Type
        </p>

        <Select
          options={options}
          value={options.find(
            (item) => item.value === selectCurrency
          )}
          onChange={(selected) =>
            onCurrencyChange(selected.value)
          }
          isDisabled={currencyDisable}
          isSearchable
          styles={customStyles}
        />

      </div>

    </div>
  );
}

export default InputBox;
