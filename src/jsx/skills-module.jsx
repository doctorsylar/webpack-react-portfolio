import React, {Component} from 'react';




function SkillItem (props) {
    return (
        <div className='skill-item'>
            <img src={props.pictureUrl} alt={props.name} key={props.name} title={props.name}/>
        </div>
    )
}

function SkillsModule(props) {
    let skills = [];
    props.skills.forEach((skill) => {
        skills.push(
            <SkillItem pictureUrl={skill.pictureUrl}
                       name={skill.name}
                       key={skill.name}/>
        );
    });
    return (
        <div className='skills grid'>
            { skills }
        </div>
    );
}

class CategoryButtons extends Component {
    constructor(props) {
        super(props);
        // this.buttonClickHandler.bind(this);
    }

    buttonClickHandler = (event) => {
        this.props.rerender(event.target.innerText);
        // console.log(this.props.chosenCategories);
    };


    render() {
        let buttons = [];
        this.props.categories.forEach((category) => {
            if (this.props.chosen.indexOf(category) !== -1) {
                buttons.push(
                    <span className='skill-category active'
                          onClick={this.buttonClickHandler}
                          key={category}
                    >
                        { category }
                    </span>
                )
            }
            else {
                buttons.push(
                    <span className='skill-category'
                          onClick={this.buttonClickHandler}
                          key={category}
                    >
                        { category }
                    </span>
                )
            }
        });

        return (
            <div className='skills-buttons-container'>
                { buttons }
            </div>
        );
    }


}

class LimitedSkillsModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: ['All', 'CSS', 'JavaScript', 'Frameworks', 'Other'],
            chosenCategories: ['All', 'CSS', 'JavaScript', 'Frameworks', 'Other'],
            list: this.props.list
        };
        // this.reRenderModule.bind(this);
    }

    reRenderModule = (category) => {
        if (category === 'All') {
            this.setState({
                chosenCategories: this.state.categories
            });
        }
        else {
            if (this.state.chosenCategories.indexOf('All') !== -1) {
                this.setState({
                    chosenCategories: new Array(category)
                });
            }
            else {
                let index = this.state.chosenCategories.indexOf(category);
                if (index === -1) {
                    if (this.state.chosenCategories.length === this.state.categories.length - 2) {
                        this.setState({
                            chosenCategories: this.state.categories
                        });
                    }
                    else {
                        let array = this.state.chosenCategories;
                        array.push(category);
                        this.setState({
                            chosenCategories: array
                        });
                    }
                }
                else {
                    let array = this.state.chosenCategories;
                    array.splice(index, 1);
                    this.setState({
                        chosenCategories: array
                    });
                }
            }
        }
    };

    render() {
        let filteredList = [];
        console.log(typeof this.state.chosenCategories);
        this.state.list.forEach((tech) => {
            let pass = false;
            for (let category of tech.categories) {
                if (this.state.chosenCategories.indexOf(category) !== -1) {
                    pass = true;
                    break;
                }
            }
            if (pass === true) {
                filteredList.push(tech);
            }
        });

        return (
            <div className='skills-react-container'>
                <CategoryButtons categories={this.state.categories}
                                 chosen={this.state.chosenCategories}
                                 rerender={this.reRenderModule}
                />

                <SkillsModule skills={filteredList}/>

            </div>
        );
    }
}

export default LimitedSkillsModule;
