// SurveyFormReview shows users thier form inputs for review
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitSurvey } from './surveyFormSlice';

export default function SurveyFormReview({ onCancel }) {
  const { formValues } = useSelector((state) => state.surveyFormData);
  const dispatch = useDispatch();

  const onSubmitHandler = (e, formValues) => {
    e.preventDefault();
    console.log('submitted');
    dispatch(submitSurvey(formValues));
  };

  return (
    <div className='card w-96 bg-base-100 text-neutral-content shadow-xl'>
      <div className='card-body items-center text-center'>
        <form
          className='flex flex-col w-full text-neutra gap-4'
          onSubmit={onSubmitHandler}g
        >
          <h2 className='card-title text-neutral'>
            Please Confirm Your Survey
          </h2>

          <div className='form-control w-full max-w-xs'>
            <label htmlFor='title' className='label'>
              <span className='label-text'>Survey Title:</span>
            </label>
            <p
              id='title'
              type='text'
              className='w-full max-w-xs text-neutral text-left'
            >
              {formValues.title}
            </p>
          </div>
          <div className='form-control w-full max-w-xs'>
            <label htmlFor='subject' className='label'>
              <span className='label-text'>Subject Line:</span>
            </label>
            <p
              id='subject'
              type='text'
              className='w-full max-w-xs text-neutral text-left'
            >
              {formValues.subject}
            </p>
          </div>
          <div className='form-control w-full max-w-xs'>
            <label htmlFor='body' className='label'>
              <span className='label-text'>Survey Question:</span>
            </label>
            <p
              id='body'
              type='text'
              className='w-full max-w-xs text-neutral text-left'
            >
              {formValues.body}
            </p>
          </div>
          <div className='form-control w-full max-w-xs'>
            <label htmlFor='recipients' className='label'>
              <span className='label-text'>Recipient List</span>
            </label>
            <p
              id='recipients'
              type='text'
              className='w-full max-w-xs text-neutral text-left'
            >
              {formValues.recipients}
            </p>
          </div>

          <div className='flex gap-4 justify-center'>
            <button className='btn btn-outline btn-accent' onClick={onCancel}>
              Cancel
            </button>
            <button
              className='btn btn-outline btn-primary'
              onClick={(e) => onSubmitHandler(e, formValues)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
