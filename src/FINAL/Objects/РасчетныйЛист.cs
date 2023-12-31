﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.FINAL
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Расчетный лист.
    /// </summary>
    // *** Start programmer edit section *** (РасчетныйЛист CustomAttributes)

    // *** End programmer edit section *** (РасчетныйЛист CustomAttributes)
    [AutoAltered()]
    [Caption("Расчетный лист")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РасчетныйЛистE", new string[] {
            "НомерЛиста as \'Номер листа\'",
            "ДатаЛиста as \'Дата составления листа\'",
            "Отправлено as \'Отправлено\'",
            "Сотрудники.Фамилия as \'Фамилия\'",
            "Сотрудники.Имя as \'Имя\'",
            "Сотрудники.Отчество as \'Отчество\'",
            "Сотрудники"}, Hidden=new string[] {
            "Сотрудники"})]
    [AssociatedDetailViewAttribute("РасчетныйЛистE", "СоставРасчета", "СоставРасчетаE", true, "", "Состав расчета", true, new string[] {
            ""})]
    [View("РасчетныйЛистL", new string[] {
            "НомерЛиста as \'Номер листа\'",
            "ДатаЛиста as \'Дата составления листа\'",
            "Сотрудники.Фамилия as \'Фамилия\'",
            "Сотрудники.Имя as \'Имя\'",
            "Сотрудники.Отчество as \'Отчество\'",
            "Отправлено as \'Отправлено\'",
            "Сотрудники.Отделы.Наименование as \'Отдел\'",
            "Сотрудники.Должности",
            "Сотрудники.Должности.Название as \'Должность\'",
            "Сотрудники.Отделы"}, Hidden=new string[] {
            "Сотрудники.Должности",
            "Сотрудники.Отделы"})]
    public class РасчетныйЛист : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерЛиста;
        
        private System.DateTime fДатаЛиста = System.DateTime.Now;
        
        private bool fОтправлено = false;
        
        private IIS.FINAL.Сотрудники fСотрудники;
        
        private IIS.FINAL.DetailArrayOfСоставРасчета fСоставРасчета;
        
        // *** Start programmer edit section *** (РасчетныйЛист CustomMembers)

        // *** End programmer edit section *** (РасчетныйЛист CustomMembers)

        
        /// <summary>
        /// ДатаЛиста.
        /// </summary>
        // *** Start programmer edit section *** (РасчетныйЛист.ДатаЛиста CustomAttributes)

        // *** End programmer edit section *** (РасчетныйЛист.ДатаЛиста CustomAttributes)
        public virtual System.DateTime ДатаЛиста
        {
            get
            {
                // *** Start programmer edit section *** (РасчетныйЛист.ДатаЛиста Get start)

                // *** End programmer edit section *** (РасчетныйЛист.ДатаЛиста Get start)
                System.DateTime result = this.fДатаЛиста;
                // *** Start programmer edit section *** (РасчетныйЛист.ДатаЛиста Get end)

                // *** End programmer edit section *** (РасчетныйЛист.ДатаЛиста Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетныйЛист.ДатаЛиста Set start)

                // *** End programmer edit section *** (РасчетныйЛист.ДатаЛиста Set start)
                this.fДатаЛиста = value;
                // *** Start programmer edit section *** (РасчетныйЛист.ДатаЛиста Set end)

                // *** End programmer edit section *** (РасчетныйЛист.ДатаЛиста Set end)
            }
        }
        
        /// <summary>
        /// НомерЛиста.
        /// </summary>
        // *** Start programmer edit section *** (РасчетныйЛист.НомерЛиста CustomAttributes)

        // *** End programmer edit section *** (РасчетныйЛист.НомерЛиста CustomAttributes)
        public virtual int НомерЛиста
        {
            get
            {
                // *** Start programmer edit section *** (РасчетныйЛист.НомерЛиста Get start)

                // *** End programmer edit section *** (РасчетныйЛист.НомерЛиста Get start)
                int result = this.fНомерЛиста;
                // *** Start programmer edit section *** (РасчетныйЛист.НомерЛиста Get end)

                // *** End programmer edit section *** (РасчетныйЛист.НомерЛиста Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетныйЛист.НомерЛиста Set start)

                // *** End programmer edit section *** (РасчетныйЛист.НомерЛиста Set start)
                this.fНомерЛиста = value;
                // *** Start programmer edit section *** (РасчетныйЛист.НомерЛиста Set end)

                // *** End programmer edit section *** (РасчетныйЛист.НомерЛиста Set end)
            }
        }
        
        /// <summary>
        /// Отправлено.
        /// </summary>
        // *** Start programmer edit section *** (РасчетныйЛист.Отправлено CustomAttributes)

        // *** End programmer edit section *** (РасчетныйЛист.Отправлено CustomAttributes)
        public virtual bool Отправлено
        {
            get
            {
                // *** Start programmer edit section *** (РасчетныйЛист.Отправлено Get start)

                // *** End programmer edit section *** (РасчетныйЛист.Отправлено Get start)
                bool result = this.fОтправлено;
                // *** Start programmer edit section *** (РасчетныйЛист.Отправлено Get end)

                // *** End programmer edit section *** (РасчетныйЛист.Отправлено Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетныйЛист.Отправлено Set start)

                // *** End programmer edit section *** (РасчетныйЛист.Отправлено Set start)
                this.fОтправлено = value;
                // *** Start programmer edit section *** (РасчетныйЛист.Отправлено Set end)

                // *** End programmer edit section *** (РасчетныйЛист.Отправлено Set end)
            }
        }
        
        /// <summary>
        /// Расчетный лист.
        /// </summary>
        // *** Start programmer edit section *** (РасчетныйЛист.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (РасчетныйЛист.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.FINAL.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (РасчетныйЛист.Сотрудники Get start)

                // *** End programmer edit section *** (РасчетныйЛист.Сотрудники Get start)
                IIS.FINAL.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (РасчетныйЛист.Сотрудники Get end)

                // *** End programmer edit section *** (РасчетныйЛист.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетныйЛист.Сотрудники Set start)

                // *** End programmer edit section *** (РасчетныйЛист.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (РасчетныйЛист.Сотрудники Set end)

                // *** End programmer edit section *** (РасчетныйЛист.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Расчетный лист.
        /// </summary>
        // *** Start programmer edit section *** (РасчетныйЛист.СоставРасчета CustomAttributes)

        // *** End programmer edit section *** (РасчетныйЛист.СоставРасчета CustomAttributes)
        public virtual IIS.FINAL.DetailArrayOfСоставРасчета СоставРасчета
        {
            get
            {
                // *** Start programmer edit section *** (РасчетныйЛист.СоставРасчета Get start)

                // *** End programmer edit section *** (РасчетныйЛист.СоставРасчета Get start)
                if ((this.fСоставРасчета == null))
                {
                    this.fСоставРасчета = new IIS.FINAL.DetailArrayOfСоставРасчета(this);
                }
                IIS.FINAL.DetailArrayOfСоставРасчета result = this.fСоставРасчета;
                // *** Start programmer edit section *** (РасчетныйЛист.СоставРасчета Get end)

                // *** End programmer edit section *** (РасчетныйЛист.СоставРасчета Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетныйЛист.СоставРасчета Set start)

                // *** End programmer edit section *** (РасчетныйЛист.СоставРасчета Set start)
                this.fСоставРасчета = value;
                // *** Start programmer edit section *** (РасчетныйЛист.СоставРасчета Set end)

                // *** End programmer edit section *** (РасчетныйЛист.СоставРасчета Set end)
            }
        }
        
        // *** Start programmer edit section *** (РасчетныйЛист.Отправить CustomAttributes)

        // *** End programmer edit section *** (РасчетныйЛист.Отправить CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void Отправить()
        {
            // *** Start programmer edit section *** (РасчетныйЛист.Отправить method implementation)
            return;
            // *** End programmer edit section *** (РасчетныйЛист.Отправить method implementation)
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РасчетныйЛистE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РасчетныйЛистE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РасчетныйЛистE", typeof(IIS.FINAL.РасчетныйЛист));
                }
            }
            
            /// <summary>
            /// "РасчетныйЛистL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РасчетныйЛистL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РасчетныйЛистL", typeof(IIS.FINAL.РасчетныйЛист));
                }
            }
        }
    }
}
