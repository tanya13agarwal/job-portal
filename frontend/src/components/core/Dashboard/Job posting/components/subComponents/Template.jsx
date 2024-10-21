import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { MdSearch } from 'react-icons/md';
import { FiX } from 'react-icons/fi';
import template from '../../data/template.json';
import recommended from '../../data/recommended.json';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const Template = ({ handleTemplateClose }) => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTemplates, setFilteredTemplates] = useState({
    recommended: [],
    standard: [],
  });

  useEffect(() => {
    // Initially open all sections
    setVisibleSections(template.sections.map((_, index) => index));
  }, []);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();

    // Filter recommended templates
    const filteredRecommended = recommended.templates.filter(template =>
      template.title.toLowerCase().includes(lowercasedQuery)
    );

    // Filter standard templates
    const filteredStandard = template.sections.map(section => ({
      ...section,
      templates: section.templates.filter(template =>
        template.title.toLowerCase().includes(lowercasedQuery)
      ),
    })).filter(section => section.templates.length > 0);

    setFilteredTemplates({
      recommended: filteredRecommended,
      standard: filteredStandard,
    });
  }, [searchQuery]);

  const toggleSectionVisibility = index => {
    setVisibleSections(prevVisibleSections =>
      prevVisibleSections.includes(index)
        ? prevVisibleSections.filter(sectionIndex => sectionIndex !== index) // Close section
        : [...prevVisibleSections, index] // Open section
    );
  };

  const totalResults = filteredTemplates.recommended.length + filteredTemplates.standard.reduce((acc, section) => acc + section.templates.length, 0);

  return (
    <div className='bg-gray-100'>
      <div className="p-4 flex items-center justify-between fixed bg-white sm:w-[73%] w-[85%] top-6 md:left-[13.5%] left-[7.5%] rounded z-10 border-b border-gray-300">
        <p className="md:text-xl text-md font-semibold text-black">Job Templates</p>
        <div className="relative w-[63.5%]">
          <TextField
            placeholder='Search template by name, job title'
            variant='outlined'
            fullWidth
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <MdSearch />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '4px',
                paddingRight: '0',
              },
              '& .MuiInputAdornment-positionStart': {
                marginRight: '8px',
              },
              '& .MuiInputBase-input': {
                padding: '10.5px 14px',
              },
            }}
          />
        </div>
        <FiX onClick={handleTemplateClose} className="text-2xl cursor-pointer" />
      </div>

      <div className='pt-24 bg-gray-100'>
        {searchQuery ? (
          <div className='bg-gray-100 px-4 rounded'>
            <h2 className='text-xl font-semibold'>
              Search results based on '{searchQuery}' ({totalResults})
            </h2>
            <div className='pb-4'>
              <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 pb-4'>
                {filteredTemplates.recommended.map((it, index) => (
                  <div
                    className='relative bg-white w-full rounded border p-3 hover:opacity-[70%] border-gray-900 group cursor-pointer'
                    key={index}
                  >
                    <div className='hidden bg-gray-100 -translate-y-4 h-full w-[40%] text-black right-0 group-hover:block absolute'>
                      <p className='text-[#1967d2] text-lg font-semibold h-full flex justify-center items-center mx-auto w-[88%] text-nowrap'>
                        Use Template
                      </p>
                    </div>
                    <p className='text-black text-lg font-medium pb-2'>{it.title}</p>
                    <p>{it.description}</p>
                  </div>
                ))}
                {filteredTemplates.standard.map((section, key) => (
                  <div key={key}>
                    {section.templates.map((it, index) => (
                      <div
                        className='relative bg-white w-full rounded border p-3 hover:opacity-[70%] border-gray-900 group cursor-pointer'
                        key={index}
                      >
                        <div className='hidden bg-gray-100 -translate-y-4 h-full w-[40%] text-black right-0 group-hover:block absolute'>
                          <p className='text-[#1967d2] text-lg font-semibold h-full flex justify-center items-center mx-auto w-[88%] text-nowrap'>
                            Use Template
                          </p>
                        </div>
                        <p className='text-black text-lg font-medium pb-2'>{it.title}</p>
                        <p>{it.description}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className='pb-4 mx-4'>
              <h2 className='text-xl font-semibold'>
                {recommended.header} ({recommended.templates.length})
              </h2>
              <p className='text-gray-500 text-md pb-4'>{recommended.description}</p>
            </div>
            <div className='pb-4 mx-4'>
              <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 pb-4'>
                {recommended.templates.map((it, index) => (
                  <div
                    className='relative bg-white w-full rounded border p-3 hover:opacity-[70%] border-gray-900 group cursor-pointer'
                    key={index}
                  >
                    <div className='hidden bg-gray-100 -translate-y-4 h-full w-[40%] text-black right-0 group-hover:block absolute'>
                      <p className='text-[#1967d2] text-lg font-semibold h-full flex justify-center items-center mx-auto w-[88%] text-nowrap'>
                        Use Template
                      </p>
                    </div>
                    <p className='text-black text-lg font-medium pb-2'>{it.title}</p>
                    <p>{it.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='mx-4'>
              <h2 className='text-xl font-semibold'>
                {template.header} ({template.sections.reduce((acc, section) => acc + section.templates.length, 0)})
              </h2>
              <p className='text-gray-500 text-md pb-4'>{template.description}</p>
            </div>
            <div className='mx-4'>
              {template.sections.map((section, key) => (
                <div key={key}>
                  <button
                    onClick={() => toggleSectionVisibility(key)}
                    className='pr-2 py-4 flex justify-between items-center'
                  >
                    <p className='text-black text-lg font-semibold'>
                      {section.name} ({section.templates.length})
                    </p>
                    {visibleSections.includes(key) ? (
                      <IoIosArrowUp className='ml-5' />
                    ) : (
                      <IoIosArrowDown className='ml-5' />
                    )}
                  </button>
                  {visibleSections.includes(key) && (
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 pb-4'>
                      {section.templates.map((it, index) => (
                        <div
                          className='relative bg-white w-full rounded border p-3 hover:opacity-[70%] border-gray-900 group cursor-pointer'
                          key={index}
                        >
                          <div className='hidden bg-gray-100 -translate-y-4 h-full w-[40%] text-black right-0 group-hover:block absolute'>
                            <p className='text-[#1967d2] text-lg font-semibold h-full flex justify-center items-center mx-auto w-[88%] text-nowrap'>
                              Use Template
                            </p>
                          </div>
                          <p className='text-black text-lg font-medium pb-2'>
                            {it.title}
                          </p>
                          <p>{it.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className='w-full h-[1px] bg-gray-300'></div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Template;