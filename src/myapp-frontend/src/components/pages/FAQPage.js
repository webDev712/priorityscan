import React from "react";
import Menu from '../Menu';
import Header from "../Header";
import MainBackground from "../MainBackground";
import IntakeForm from "../IntakeForm";
import { useEffect, useState } from 'react';

function FAQPage(){
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);
  return (

    <div className="App">
      <Header></Header>
      {/* {message}       */}
      <Menu weight="faq"></Menu>
      <div id="dataContainer">
        <div className="headerText">This is FAQ page</div>
        <div className="descriptionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu dolor, blandit eget elit vitae, fermentum tincidunt ligula. Phasellus efficitur dui sit amet quam malesuada, eu vulputate tellus volutpat. Aliquam consectetur suscipit risus, id condimentum elit pretium nec. Cras in rutrum odio. Pellentesque tempus ultrices leo tempus maximus. Sed porttitor finibus rutrum. Sed lobortis non libero at gravida. Integer in finibus tellus, in dignissim nibh. Nulla quis sem tortor. Nam vel neque interdum sem tincidunt faucibus at eu magna. Sed non tincidunt nisi. Curabitur sollicitudin risus hendrerit suscipit elementum. Curabitur orci ante, posuere eget sem ullamcorper, euismod pharetra diam.</div>
        <div className="descriptionText">Pellentesque fringilla justo mi. Pellentesque aliquam at metus molestie porta. Nullam ullamcorper augue sit amet velit malesuada porttitor. Ut volutpat elit lacus, ac fermentum sapien venenatis sit amet. Nam id ultrices risus. Vestibulum lacus justo, semper non ante vitae, rutrum malesuada libero. Nunc luctus leo at pulvinar venenatis. Sed odio justo, tincidunt eu efficitur at, faucibus eu ante. Cras rhoncus odio ac rhoncus bibendum. Suspendisse potenti. Duis ullamcorper suscipit consectetur. Maecenas egestas, purus vel dapibus cursus, nibh mauris placerat purus, sit amet luctus leo elit sit amet neque. Praesent pharetra pellentesque est, vitae elementum mi dictum sit amet. Nam semper nisi at cursus ultricies. Phasellus sed magna quis dolor cursus lacinia. Vivamus consectetur eleifend congue.</div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default FAQPage;