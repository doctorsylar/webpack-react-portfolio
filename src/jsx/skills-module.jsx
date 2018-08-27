import React, {Component} from 'react';
import { CSSTransition } from 'react-transition-group';



function Description (props) {
        return (
            <CSSTransition in={props.show}
                           classNames="description"
                           timeout={800}
                           unmountOnExit
            >
                {status => (
                    <div className='description flex'>
                        <img src={props.technology.pictureUrl}
                             alt={props.technology.name}
                             key={props.technology.name}
                             title={props.technology.name} />
                        <div className="skill-description-text">
                            <h4>{ props.technology.name }</h4>
                            <p>{ props.technology.description }</p>
                        </div>
                    </div>
                )}
            </CSSTransition>
        )
}

class CategoryButtons extends Component {
    constructor(props) {
        super(props);
    }

    buttonClickHandler = (event) => {
        this.props.rerender(event.target.innerText);
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
            <div className='skills-buttons-container flex'>
                { buttons }
            </div>
        );
    }
}

class SkillItem extends Component {
    descriptionHandler = (event) => {
        this.props.descriptionHandler(event.target.title);
    };

    render() {
        return (
            <CSSTransition
                in={this.props.show}
                classNames="skill-item"
                timeout={800}
                unmountOnExit
            >
                { status => (
                    <div className='skill-item flex'>
                        <img src={this.props.pictureUrl}
                             alt={this.props.name}
                             key={this.props.name}
                             title={this.props.name}
                             onClick={this.descriptionHandler}
                        />
                    </div>
                )}
            </CSSTransition>
        );
    }
}

class SkillsModule extends Component {
    constructor(props) {
        super(props);
    }

    descriptionHandler = (tech) => {
        this.props.descriptionHandler(tech);
    };

    render() {
        let skills = [];
        this.props.skills.forEach((skill) => {
            skills.push(
                <SkillItem pictureUrl={skill.pictureUrl}
                           name={skill.name}
                           key={skill.name}
                           show={this.props.filteredSkills.indexOf(skill.name) !== -1}
                           descriptionHandler={this.props.descriptionRenderer}
                />
            );
        });
        return (
            <div className='skills flex'>
                { skills }
            </div>
        );
    }
}


class LimitedSkillsModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: ['All', 'Basic', 'CSS', 'JavaScript', 'Frameworks', 'Server-side', 'Other'],
            chosenCategories: ['All', 'Basic', 'CSS', 'JavaScript', 'Frameworks', 'Server-side', 'Other'],
            showDescription: false,
            descriptionFor: ''
        };
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

    descriptionRendererMethod = (tech) => {
        if (this.state.showDescription === true &&
            this.state.descriptionFor.name === tech) {
            this.setState({
                showDescription: false
            })
        }
        else {
            let chosenTech = {};
            for (let el of this.props.list) {
                if (el.name === tech) {
                    chosenTech = el;
                    break;
                }
            }
            this.setState({
                showDescription: true,
                descriptionFor: chosenTech
            })
        }
    };

    render() {
        let filteredList = [];
        this.props.list.forEach((tech) => {
            let pass = false;
            for (let category of tech.categories) {
                if (this.state.chosenCategories.indexOf(category) !== -1) {
                    pass = true;
                    break;
                }
            }
            if (pass === true) {
                filteredList.push(tech.name);
            }
        });

        return (
            <div className='skills-react-container'>
                <Description show={this.state.showDescription}
                             technology={this.state.descriptionFor}
                />
                <CategoryButtons categories={this.state.categories}
                                 chosen={this.state.chosenCategories}
                                 rerender={this.reRenderModule}
                />

                <SkillsModule
                    skills={this.props.list}
                    techNames={this.state.techNames}
                    filteredSkills={filteredList}
                    descriptionRenderer={this.descriptionRendererMethod}
                />

            </div>
        );
    }
}

export default LimitedSkillsModule;
