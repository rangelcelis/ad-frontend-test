import Filter from '@/app/ui/filter';

const FilterSection = ({ options }: { options: string[] }) => {
  return (
    <section className="grid px-6 2xl:px-32 py-8 2xl:py-12 gap-8 border-b border-b-color-tertiary rounded-lg">
      <h1 className="text-2xl font-bold text-item-primary uppercase">Top Sellers</h1>
      <div className="flex justify-end gap-6">
        <Filter options={options} />
      </div>
    </section>
  );
};

export default FilterSection;
