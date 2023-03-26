import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

function Data() {
    const columns = ['Dept', 'Degr', 'Major Code', 'Major Name', 'Conc Code',
    'Concentration Name (if any)', 'FRESH MAN', 'SOPHO MORE',
    'JUNIOR', 'SENIOR', 'NDEG UGRAD', 'TOTAL UGRAD',
    'GRAD I (master)', 'GRAD II (doctoral)', 'NDEG GRAD',
    'TOTAL GRAD', 'PROFES SIONAL', 'TOTAL STUDENTS',
    'Academic Program Code'];
  const data = [['434', 'BS', '112', 'Computer Science', 'nan', 'nan', '77', '218',
  '301', '474', '0', '1070', '0', '0', '0', '0', '0', '1070',
  '10KP0112BS'],
 ['434', 'BS', '112', 'Computer Science', '1854',
  'CS:BS/MS Program', '0', '0', '0', '23', '0', '23', '0', '0',
  '0', '0', '0', '23', '10KP1854BS'],
 ['434', 'BS', '112', 'Computer Science', '5458',
  'BS/MCS Computer Science', '0', '0', '0', '12', '0', '12', '0',
  '0', '0', '0', '0', '12', '10KP5458BS'],
 ['434', 'MCS', '112', 'Computer Science', 'nan', 'nan', '0', '0', '0',
  '0', '0', '0', '64', '0', '0', '64', '0', '64', '10KS0112MCS'],
 ['434', 'MCS', '112', 'Computer Science', 'nan', 'nan', '0', '0', '0',
  '0', '0', '0', '1', '0', '0', '1', '0', '1', '10KS0112MCSU'],
 ['434', 'MCS', '112', 'Computer Science', 'nan', 'nan', '0', '0', '0',
  '0', '0', '0', '125', '0', '0', '125', '0', '125',
  '1SKS0112MCSU'],
 ['434', 'MCS', '112', 'Computer Science', '5458',
  'BS/MCS Computer Science', '0', '0', '0', '0', '0', '0', '14',
  '0', '0', '14', '0', '14', '10KS5458MCS'],
 ['434', 'MS', '112', 'Computer Science', 'nan', 'nan', '0', '0', '0',
  '0', '0', '0', '98', '0', '0', '98', '0', '98', '10KS0112MS'],
 ['434', 'MS', '112', 'Computer Science', '1854',
  'CS:BS/MS Program', '0', '0', '0', '0', '0', '0', '21', '0', '0',
  '21', '0', '21', '10KS1854MS'],
 ['434', 'MS', '4026', 'Bioinformatics', '4028',
  'Computer Science', '0', '0', '0', '0', '0', '0', '5', '0', '0',
  '5', '0', '5', '10KS4028MS'],
 ['434', 'PHD', '112', 'Computer Science', 'nan', 'nan', '0', '0', '0',
  '0', '0', '0', '0', '319', '0', '319', '0', '319', '10KS0112PHD'],
 ['434', 'PHD', '112', 'Computer Science', '5511',
  'Computational Sci & Engr', '0', '0', '0', '0', '0', '0', '0',
  '1', '0', '1', '0', '1', '10KS0112PHD']];

  return (
    <div
      style={{
        
      }}
    >
      <Table variant="simple" maxW="xl">
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th key={column}>{column}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              {row.map((cell, index) => (
                <Td key={index}>{cell}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default Data;