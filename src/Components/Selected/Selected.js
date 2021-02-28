import React from 'react';

const Selected = (props) => {
    console.log(props)
    const team = props.selectedPlayer;
    const listStyle = {
        listStyle: 'none'
    }
    let total = 0;
    team.map(player =>(
        total += player.salary
    ));
    return (
        <div>
            <div className="bg-dark text-white shadow p-2 rounded">
                <h4>Team member: {team.length}</h4>
                <h6>Total cost: $ {total}</h6>
            </div>
            <div className="d-flex bg-light shadow p-1 my-1  rounded ">
                <div className="col-7">
                    {
                        team.map(player => <li style={listStyle}>{player.name}</li>)
                    }
                </div>
                <div className="col-5">
                    {
                        team.map(player => <li style={listStyle}>$ {player.salary}</li>)
                    }
                </div>
            </div>
           
        </div>
    );
};

export default Selected;