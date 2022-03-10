import { Component } from 'react';
import { connect } from 'react-redux';
import { TestCal } from './Calendar';
import { GuestsFilter } from './GuestsFilter';
import { AdditionalFilter } from '../cmps/AdditionalFilters';
import { setFilterBy } from '../store/stay.action';
import { RangeSlider } from './priceRange';

import 'react-day-picker/lib/style.css';

// import { Button } from "@material-ui/core";

export class _StayFilter extends Component {
  state = {
    currModalShown: '',
    currChosenSpecialStay: '',
    filterBy: {
      specialStay: '',
      additionalFilter: [],
    },
  };

  componentDidMount() {}

  componentDidUpdate() {
  }

  onOpenModal = (value) => {
    this.setState({ currModalShown: value });
  };
  handelFilterByChange = (field, value) => {
    this.setState(
      (prevState) => ({ ...prevState, filterBy: { ...prevState.filterBy, [field]: value } }),
      () => {
        if (field === 'specialStay') {
          this.handelSpecialStayChange(value);
          this.onSubmitFilterBy();
        }
      }
    );
  };

  onSaveClicked = () => {
    this.onOpenModal('');
    this.onSubmitFilterBy();
  };

  onSubmitFilterBy = () => {
    this.props.setFilterBy(this.state.filterBy);
  };

  handelDateChange = (start, end) => {
    if (start) this.handelFilterByChange('startDate', start);
    if (end) this.handelFilterByChange('endDate', end);

  };
  handelSpecialStayChange(value) {
    this.setState({ currChosenSpecialStay: value });
  }

  render() {
    const { currModalShown } = this.state;
    return (
      <section className='filter-header flex '>
        <div></div>
        {currModalShown && <div className='screen' onClick={() => this.onOpenModal('')}></div>}
        <section className='special-stay '>
          <div
            className={'stay-type' + ' ' + `${this.state.currChosenSpecialStay === 'Houseboats' ? 'active-stay' : ''}`}
            onClick={() => this.handelFilterByChange('specialStay', 'Houseboats')}>
            Houseboats
          </div>
          <div
            className={'stay-type' + ' ' + `${this.state.currChosenSpecialStay === 'Beachfront' ? 'active-stay' : ''}`}
            onClick={() => this.handelFilterByChange('specialStay', 'Beachfront')}>
            Beachfront
          </div>
          <div
            className={'stay-type' + ' ' + `${this.state.currChosenSpecialStay === 'Cabins' ? 'active-stay' : ''}`}
            onClick={() => this.handelFilterByChange('specialStay', 'Cabins')}>
            Cabins
          </div>
          <div
            className={'stay-type' + ' ' + `${this.state.currChosenSpecialStay === 'TreeHouse' ? 'active-stay' : ''}`}
            onClick={() => this.handelFilterByChange('specialStay', 'TreeHouse')}>
            Treehouse
          </div>
          <div
            className={
              'stay-type' + ' ' + `${this.state.currChosenSpecialStay === 'Ski in/Ski out' ? 'active-stay' : ''}`
            }
            onClick={() => this.handelFilterByChange('specialStay', 'Ski in/Ski out')}>
            Ski in/Ski out
          </div>
          <div
            className={'stay-type' + ' ' + `${this.state.currChosenSpecialStay === 'Off Beat' ? 'active-stay' : ''}`}
            onClick={() => this.handelFilterByChange('specialStay', 'Off Beat')}>
            Off Beat
          </div>
          <div
            className={'stay-type' + ' ' + `${this.state.currChosenSpecialStay === 'specialStay' ? 'active-stay' : ''}`}
            onClick={() => this.handelFilterByChange('specialStay', 'farm')}>
            Farms
          </div>
        </section>

        {/* <div className='round-button'> */}
          {/* <Button variant="outlined">Primary</Button> */}
          {/* <button onClick={() => this.onOpenModal('cal')}>Anytime </button>
          <button onClick={() => this.onOpenModal('guests')}>Guests</button>
          <button onClick={() => this.onOpenModal('filters')}>Filters</button>
        </div>
        <div className={'cal-modal' + ' ' + `${this.state.currModalShown === 'cal' ? ' shown' : ''}`}>
          <TestCal handelDateChange={this.handelDateChange} onSaveClicked={this.onSaveClicked} /> */}
          {/* <button className='save' onClick={() => this.onOpenModal('')}>
            save
          </button> */}
        {/* </div>
        <div className={'guests-modal' + ' ' + `${this.state.currModalShown === 'guests' ? 'shown' : ''}`}>
          <GuestsFilter handelFilterByChange={this.handelFilterByChange} onSaveClicked={this.onSaveClicked} />
        </div>
        <div className={'filters-modal' + ' ' + `${this.state.currModalShown === 'filters' ? 'shown' : ''}`}>
          <AdditionalFilter
            handelFilterByChange={this.handelFilterByChange}
            onSaveClicked={this.onSaveClicked}
            onOpenModal={this.onOpenModal}
          />
        </div> */}
      </section>
    );
  }
}

function mapStateToProps({ stayModule }) {
  return {
    // filterBy: stayModule.filterBy
  };
}

const mapDispatchToProps = {
  setFilterBy,
};

export const StayFilter = connect(mapStateToProps, mapDispatchToProps)(_StayFilter);
