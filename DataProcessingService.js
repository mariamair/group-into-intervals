/** 
 * This class contains function to process the data input.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 * @version 0.0.1
 */

export class DataProcessingService {

  sortDataAscending (data) {
    const sorted = Array.from(data)
    return sorted.sort((a,b) => a - b)
  }

  sortDataDescending (data) {
    const sorted = Array.from(data)
    return sorted.sort((a,b) => b - a)
  }
}