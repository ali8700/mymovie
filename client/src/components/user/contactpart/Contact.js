import React from "react";
import Card from "./Card";
import { useEffect } from "react";
import { fetchContacts } from "../../../api/contactApi";
import { useDispatch, useSelector } from "react-redux";
import { setContacts } from "../../../store/contactSlice";
const Contact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact);

  const getContact = async () => {
    const data = await fetchContacts();
    console.log('data',data)
    dispatch(setContacts(data.Contacts));
  };
  useEffect(() => {
    getContact();
  }, []);
  return (
    <div>
      {contacts.map((el) => (
        <Card contact={el} getContact={getContact} />
      ))}
    </div>
  );
};
export default Contact;
