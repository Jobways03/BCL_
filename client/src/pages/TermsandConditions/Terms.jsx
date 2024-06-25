import React from 'react'
import "./terms.css"

const Terms = () => {
  return (
    <div className="terms-container">
      <h1 className="h1">Consent Form</h1>
      <p className="p">
        Welcome to our cricket tournament. By participating in this tournament,
        you agree to the following terms and conditions. These are put in place
        to ensure a fair, enjoyable, and competitive environment for all
        participants.
      </p>

      <div className="term">
        <h2 className="h2">1. Fixed Position of Batsmen</h2>
        <p className="p">
          All teams must adhere to a predetermined batting order. Changes to the
          batting lineup are only permissible in cases of injury or other
          exceptional circumstances, subject to the approval of the tournament
          officials.
        </p>
      </div>

      <div className="term">
        <h2 className="h2">2. Sealed Number of Overs for Bowlers</h2>
        <p className="p">
          Each bowler is limited to a specific number of overs, as determined by
          the tournament format. Exceeding this limit will result in penalties
          for the team, including possible forfeiture of the match.
        </p>
      </div>

      <div className="term">
        <h2 className="h2">3. Personal Kit Mandatory</h2>
        <p className="p">
          All players are required to bring their own personal cricket kit for
          all matches. Sharing of equipment between players is not recommended,
          except for team-owned gear.
        </p>
      </div>

      <div className="term">
        <h2 className="h2">4. Own Transport to the Ground</h2>
        <p className="p">
          Participants are responsible for their transportation to and from the
          tournament venue. The organizers will not provide transport or cover
          transportation expenses.
        </p>
      </div>

      <div className="term">
        <h2 className="h2">5. Fair Play</h2>
        <p className="p">
          Fair play and sportsmanship must be maintained at all times. Any form
          of cheating, aggressive behavior, or unsportsmanlike conduct will lead
          to immediate suspension from the tournament.
        </p>
      </div>

      <div className="term">
        <h2 className="h2">6. Risk of Injuries</h2>
        <p className="p">
          Participants acknowledge the inherent risk of injury associated with
          cricket. By participating, you agree that the tournament organizers,
          sponsors, and affiliates cannot be held liable for any injuries
          sustained during the tournament.
        </p>
      </div>

      <div className="term">
        <h2 className="h2">7. Professional Behaviour</h2>
        <p className="p">
          All participants are expected to conduct themselves in a professional
          manner. Respect for fellow players, umpires, and tournament officials
          is paramount.
        </p>
      </div>

      <div className="term">
        <h2 className="h2">8. Obeying Umpires and Captains</h2>
        <p className="p">
          Decisions made by umpires and team captains are final and binding.
          Disputes should be handled respectfully and through the appropriate
          channels.
        </p>
      </div>

      <div className="term">
        <h2 className="h2">9. Age Requirement</h2>
        <p className="p">
          Participants must be aged 16 years or above. Proof of age may be
          required at the discretion of the tournament organizers.
        </p>
      </div>

      <div className="term">
        <h2 className="h2">10. Acceptance of Terms</h2>
        <p className="p">
          Participation in the tournament constitutes acceptance of these terms
          and conditions. Failure to comply with any of the above terms may
          result in disqualification and/or further action as deemed appropriate
          by the tournament organizers.
        </p>
      </div>

      <p className="p">
        We hope you have a great time competing and wish all participants the
        best of luck. Let's enjoy the spirit of cricket together!
      </p>
    </div>
  );
}

export default Terms
