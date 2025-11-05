import { useEffect, useRef } from "react";
import Style from "./customdropdown.module.css";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";

export default function CustomDropdown({
  isOpen = null,
  setIsOpen = () => {},
  deafultMessage = "",
  dropdownCheck = "",
  option = "",
  setOption = () => {},
  dropdownData = [],
}) {
  const dropdownRef = useRef(null);

  const dropdownHandler = (value) => {
    setIsOpen((prev) => (prev === value ? null : value));
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(null);
      }
    };

    // Add event listener when dropdown is open
    if (isOpen === dropdownCheck) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, dropdownCheck, setIsOpen]);

  return (
    <div className={Style.dropdownMain} ref={dropdownRef}>
      <div
        className={Style.dropdownButton}
        onClick={() => dropdownHandler(dropdownCheck)}
      >
        <span>{option || deafultMessage}</span>
        <span>
          {isOpen === dropdownCheck ? (
            <IoChevronUpOutline />
          ) : (
            <IoChevronDown />
          )}
        </span>
      </div>
      <div
        className={`${Style.dropdownBox} ${
          isOpen === dropdownCheck ? Style.dropdownBoxShow : ""
        }`}
      >
        <ul className={Style.dropdownList}>
          {dropdownData.map((item, index) => {
            return (
              <li
                className={Style.dropdownItem}
                key={item || index}
                onClick={() => {
                  setOption(item);
                  setIsOpen(null);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
