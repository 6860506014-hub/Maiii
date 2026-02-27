export type DataStructureType = 'Array' | 'Stack' | 'Queue' | 'Linked-List' | 'Tree' | 'Graph';

export interface DataStructureInfo {
  id: DataStructureType;
  category: 'Linear' | 'Non-Linear';
  description: string;
  descriptionTh: string;
  complexity: {
    access: string;
    search: string;
    insertion: string;
    deletion: string;
  };
}

export const DATA_STRUCTURES: DataStructureInfo[] = [
  {
    id: 'Array',
    category: 'Linear',
    description: 'A collection of elements identified by index or key.',
    descriptionTh: 'โครงสร้างข้อมูลที่เก็บข้อมูลชนิดเดียวกันเรียงต่อกันในหน่วยความจำ เข้าถึงข้อมูลได้รวดเร็วผ่านดัชนี (Index)',
    complexity: { access: 'O(1)', search: 'O(n)', insertion: 'O(n)', deletion: 'O(n)' }
  },
  {
    id: 'Stack',
    category: 'Linear',
    description: 'Last-In, First-Out (LIFO) data structure.',
    descriptionTh: 'โครงสร้างข้อมูลแบบเข้าทีหลังออกก่อน (LIFO) เหมือนการวางจานซ้อนกัน',
    complexity: { access: 'O(n)', search: 'O(n)', insertion: 'O(1)', deletion: 'O(1)' }
  },
  {
    id: 'Queue',
    category: 'Linear',
    description: 'First-In, First-Out (FIFO) data structure.',
    descriptionTh: 'โครงสร้างข้อมูลแบบเข้าก่อนออกก่อน (FIFO) เหมือนการเข้าแถวรอคิว',
    complexity: { access: 'O(n)', search: 'O(n)', insertion: 'O(1)', deletion: 'O(1)' }
  },
  {
    id: 'Linked-List',
    category: 'Linear',
    description: 'A linear collection of data elements whose order is not given by their physical placement in memory.',
    descriptionTh: 'โครงสร้างข้อมูลที่แต่ละโหนดจะเก็บข้อมูลและตัวชี้ (Pointer) ไปยังโหนดถัดไป',
    complexity: { access: 'O(n)', search: 'O(n)', insertion: 'O(1)', deletion: 'O(1)' }
  },
  {
    id: 'Tree',
    category: 'Non-Linear',
    description: 'A hierarchical data structure consisting of nodes connected by edges.',
    descriptionTh: 'โครงสร้างข้อมูลแบบลำดับชั้น มีโหนดราก (Root) และโหนดลูก (Children) เชื่อมต่อกัน',
    complexity: { access: 'O(log n)', search: 'O(log n)', insertion: 'O(log n)', deletion: 'O(log n)' }
  },
  {
    id: 'Graph',
    category: 'Non-Linear',
    description: 'A set of objects where some pairs of objects are in some sense "related".',
    descriptionTh: 'โครงสร้างข้อมูลที่ประกอบด้วยจุดยอด (Vertices) และเส้นเชื่อม (Edges) แสดงความสัมพันธ์ที่ซับซ้อน',
    complexity: { access: 'N/A', search: 'O(V+E)', insertion: 'O(1)', deletion: 'O(1)' }
  }
];
