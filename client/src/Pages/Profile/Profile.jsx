
import React, { Component } from 'react';
import './profile.css'
class Profile extends React.Component
 {
    render(){ 
          return (

     <div>
        <div className="container">
<div className="row">
<div className="twPc-div">
    <a className="twPc-bg twPc-block"></a>

	<div>
		<div className="twPc-button">
         
            <a href="https://twitter.com/mertskaplan" className="twitter-follow-button" data-show-count="false" data-size="large" data-show-screen-name="false" data-dnt="true">Follow @mertskaplan</a>
            {/* <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script> */}
             
		</div>

		<a title="Desain 360" href="https://twitter.com/desain360" className="twPc-avatarLink">
			<img alt="Mert Salih Kaplan" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" className="twPc-avatarImg"/>
		</a>

		<div className="twPc-divUser">
			<div className="twPc-divName">
				<a href="https://twitter.com/desain360">Desain 360</a>
			</div>
			<span>
				<a href="https://twitter.com/desain360">@<span>desain360</span></a>
			</span>
		</div>

		<div className="twPc-divStats">
			<ul className="twPc-Arrange">
				<li className="twPc-ArrangeSizeFit">
					<a href="https://twitter.com/mertskaplan" title="9.840 Tweet">
						<span className="twPc-StatLabel twPc-block">Tweets</span>
						<span className="twPc-StatValue">9.840</span>
					</a>
				</li>
				<li className="twPc-ArrangeSizeFit">
					<a href="https://twitter.com/mertskaplan/following" title="885 Following">
						<span className="twPc-StatLabel twPc-block">Following</span>
						<span className="twPc-StatValue">885</span>
					</a>
				</li>
				<li className="twPc-ArrangeSizeFit">
					<a href="https://twitter.com/mertskaplan/followers" title="1.810 Followers">
						<span className="twPc-StatLabel twPc-block">Followers</span>
						<span className="twPc-StatValue">1.810</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>

</div>
</div> 
     </div>
              )
    
  }}
   

export default Profile;

